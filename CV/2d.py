import cv2
import numpy as np
from matplotlib import pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Read image and preprocess
img = cv2.imread('images.jpeg')
img = cv2.medianBlur(img, 5)
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
img = cv2.equalizeHist(img)

# Display image
plt.imshow(img)
plt.title('Input Image')
plt.show()

# Get height map from grayscale
height = img

# Smooth height map
height = cv2.blur(height, (3,3))

# Resample for more detail
height = cv2.resize(height, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

# Exaggerate height
height = height * 2

# Threshold for silhouette
_, silhouette = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)

# Meshgrid for x & y coordinates
X, Y = np.meshgrid(np.arange(img.shape[1]), np.arange(img.shape[0]))

X = X.astype(np.float32)
Y = Y.astype(np.float32)

# Resize X and Y to match height map
X = cv2.resize(X, (2000, 1334))
Y = cv2.resize(Y, (2000, 1334))

# Plot figure
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Plot wireframe and surface
ax.plot_wireframe(X, Y, height, rstride=5, cstride=5, color='k')
ax.plot_surface(X, Y, height, rstride=1, cstride=1, cmap='jet', shade=True, linewidth=0, antialiased=False)

# Set viewpoint and labels
ax.view_init(elev=30, azim=30)
ax.set_title('Textured 3D Model')
ax.set_xlim(0, img.shape[1])
ax.set_ylim(0, img.shape[0])

plt.show()
