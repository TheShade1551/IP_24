## CV Practicals:- 

## Experiment 1:- Plot the Histogram
```
# Required for inline plot display in Colab
%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt

# Generate a mock dataset for demonstration
np.random.seed(42)
num_images = 5000
mock_widths = np.random.randint(20, 100, size=num_images)  # Random widths between 20 and 100
mock_heights = np.random.randint(20, 100, size=num_images)  # Random heights between 20 and 100

# Create subplots with 1 row and 3 columns
fig, axs = plt.subplots(1, 3, figsize=(18, 5))

# Plot the histogram of image widths
axs[0].hist(mock_widths, bins=30, color='blue', alpha=0.7)
axs[0].set_xlabel("Width")
axs[0].set_ylabel("Frequency")
axs[0].set_title("Histogram of Image Widths")

# Plot the histogram of image heights
axs[1].hist(mock_heights, bins=30, color='green', alpha=0.7)
axs[1].set_xlabel("Height")
axs[1].set_ylabel("Frequency")
axs[1].set_title("Histogram of Image Heights")

# Create a scatter plot of image width vs. height
axs[2].scatter(mock_widths, mock_heights, color='red', alpha=0.5)
axs[2].set_xlabel("Width")
axs[2].set_ylabel("Height")
axs[2].set_title("Scatter Plot of Image Width vs. Height")

# Adjust spacing between subplots
plt.tight_layout()

# Show the plot
plt.show()
```

## Experiment 2:- Quality of the Image
```
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

def calculate_psnr(image):
    """
    Calculate the Peak Signal-to-Noise Ratio (PSNR) for a single image.

    Parameters:
        image (np.array): Input image in grayscale.

    Returns:
        float: PSNR value of the image.
    """
    gray_image = tf.image.rgb_to_grayscale(image)
    gray_image = tf.cast(gray_image, tf.float32)

    mse = tf.reduce_mean(tf.square(gray_image - tf.reduce_mean(gray_image)))
    if mse == 0:
        return float('inf')
    else:
        max_pixel_value = tf.reduce_max(gray_image)
        psnr = 20 * tf.math.log(max_pixel_value / tf.sqrt(mse)) / tf.math.log(10.0)
        return psnr.numpy()

def plot_psnr_distribution(images):
    """
    Plot the distribution of image quality based on Peak Signal-to-Noise Ratio (PSNR).

    Parameters:
        images (np.array): Array of images (in RGB format).

    Returns:
        None
    """
    psnr_values = [calculate_psnr(image) for image in images]

    # Plot the distribution of PSNR values
    plt.hist(psnr_values, bins=30, color='purple', alpha=0.7)
    plt.xlabel("Peak Signal-to-Noise Ratio (PSNR)")
    plt.ylabel("Frequency")
    plt.title("Distribution of Image Quality (PSNR)")
    plt.show()

# Load the CIFAR-10 dataset
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.cifar10.load_data()

# Normalize images to range [0, 1]
x_train = x_train / 255.0
x_test = x_test / 255.0

# Combine training and test sets (optional, depending on the dataset size you want to use)
images = np.concatenate((x_train, x_test), axis=0)

# Call the function to plot the PSNR distribution
plot_psnr_distribution(images)
```

## Experiment 3:- Erosion & Dilation
```
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load a binary image
# Changed: Replaced 'your-name' with a valid image path
image_path = 'Naruto_newshot.webp'  # Replace 'image.png' with the actual path to your image
binary_image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

# Check if the image was loaded successfully
if binary_image is None:
    print(f"Error: Could not load image from {image_path}. Please check the path and file permissions.")
    exit()  # Exit the script if image loading fails

# Thresholding the image if it's not binary already
_, binary_image = cv2.threshold(binary_image, 127, 255, cv2.THRESH_BINARY)

# Define the kernel for morphological operations
kernel = np.ones((5, 5), np.uint8)  # 5x5 kernel, modify the size as needed

# Apply Erosion
eroded_image = cv2.erode(binary_image, kernel, iterations=1)

# Apply Dilation
dilated_image = cv2.dilate(binary_image, kernel, iterations=1)

# Display the results
plt.figure(figsize=(10, 5))

# Original Image
plt.subplot(1, 3, 1)
plt.imshow(binary_image, cmap='gray')
plt.title('Original Binary Image')
plt.axis('off')

# Eroded Image
plt.subplot(1, 3, 2)
plt.imshow(eroded_image, cmap='gray')
plt.title('Eroded Image')
plt.axis('off')

# Dilated Image
plt.subplot(1, 3, 3)
plt.imshow(dilated_image, cmap='gray')
plt.title('Dilated Image')
plt.axis('off')

plt.tight_layout()
plt.show()
```

## Experiment 4:- Grayscale Image
```
import cv2
import matplotlib.pyplot as plt

# Load the RGB image
image_path = '/content/cv9,10.webp'  # Modify this to the path of your image
image_rgb = cv2.imread(image_path)

# Convert the image from BGR (OpenCV format) to RGB (for displaying with matplotlib)
image_rgb = cv2.cvtColor(image_rgb, cv2.COLOR_BGR2RGB)

# Convert the RGB image to Grayscale
image_gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)

# Plot the original and grayscale images side by side
plt.figure(figsize=(10, 5))

# Original image
plt.subplot(1, 2, 1)
plt.imshow(image_rgb)
plt.title('Original RGB Image')
plt.axis('off')

# Grayscale image
plt.subplot(1, 2, 2)
plt.imshow(image_gray, cmap='gray')
plt.title('Grayscale Image')
plt.axis('off')

# Show the plot
plt.tight_layout()
plt.show()
```

## Experiment 5:- Hit-Or-Miss Transformation
```
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load binary image (0s and 1s)
# Ensure the image is binary, or you can threshold it to make it binary
binary_image = cv2.imread('/content/cv9,10.webp', 0)  # Load as grayscale
_, binary_image = cv2.threshold(binary_image, 127, 255, cv2.THRESH_BINARY)

# Define structuring element for pattern detection (e.g., a vertical line)
# Use a 3x3 kernel that represents a vertical line
structuring_element = np.array([[0, 1, 0],
                                [0, 1, 0],
                                [0, 1, 0]], dtype=np.uint8)

# Perform hit-or-miss transformation
hitormiss = cv2.morphologyEx(binary_image, cv2.MORPH_HITMISS, structuring_element)

# Display the original and transformed images
plt.figure(figsize=(10, 5))

# Original image
plt.subplot(1, 2, 1)
plt.title('Original Binary Image')
plt.imshow(binary_image, cmap='gray')

# Hit-or-Miss result
plt.subplot(1, 2, 2)
plt.title('Hit-or-Miss Transformation')
plt.imshow(hitormiss, cmap='gray')

plt.show()
```
## Experiment 6:- Extracting Features from Image using CNN
```
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras.applications import VGG16
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input

# Load pre-trained VGG16 model
model = VGG16(weights='imagenet', include_top=False)

# Load an image
img_path = '/content/cv9,10.webp'  # Change this to the path of your image
img = image.load_img(img_path, target_size=(224, 224))  # Resize image to 224x224
img_array = image.img_to_array(img)  # Convert to array
img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
img_array = preprocess_input(img_array)  # Preprocess the image for the model

# Extract features from specific layers
layer_outputs = [layer.output for layer in model.layers if 'conv' in layer.name]  # Get convolution layers only
feature_extraction_model = tf.keras.models.Model(inputs=model.input, outputs=layer_outputs)

# Get the feature maps for the image
feature_maps = feature_extraction_model.predict(img_array)

# Function to plot feature maps from a specific layer
def plot_feature_maps(feature_maps, layer_index, num_filters=6):
    """
    Plot a given number of feature maps from a specific layer's feature map output.
    Args:
    - feature_maps: List of feature maps from different layers
    - layer_index: The index of the layer to visualize
    - num_filters: Number of filters to visualize from that layer
    """
    features = feature_maps[layer_index]  # Get the feature map for the selected layer
    fig, axes = plt.subplots(1, num_filters, figsize=(20, 20))

    for i in range(num_filters):
        axes[i].imshow(features[0, :, :, i], cmap='viridis')  # Plot ith feature map
        axes[i].axis('off')

    plt.suptitle(f"Layer {layer_index}: {model.layers[layer_index].name}", fontsize=20)
    plt.show()

# Visualize feature maps from different layers
for layer_index in [1, 5, 10]:  # Change these indices based on the layers you want to inspect
    plot_feature_maps(feature_maps, layer_index, num_filters=6)
```

## Experiment 7:- Edge Detection Techniques
```
import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load the image
image_path = '/content/cv9,10.webp'  # Replace with the path to your image
image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # Load as grayscale

# Apply Sobel Edge Detection
sobelx = cv2.Sobel(image, cv2.CV_64F, 1, 0, ksize=3)  # Sobel on X-axis
sobely = cv2.Sobel(image, cv2.CV_64F, 0, 1, ksize=3)  # Sobel on Y-axis
sobel_combined = cv2.sqrt(sobelx**2 + sobely**2)  # Combine the two gradients

# Apply Canny Edge Detection
edges_canny = cv2.Canny(image, threshold1=100, threshold2=200)

# Plot the results
plt.figure(figsize=(14, 7))

# Original image
plt.subplot(1, 3, 1)
plt.title('Original Image')
plt.imshow(image, cmap='gray')

# Sobel edge detection result
plt.subplot(1, 3, 2)
plt.title('Sobel Edge Detection')
plt.imshow(sobel_combined, cmap='gray')

# Canny edge detection result
plt.subplot(1, 3, 3)
plt.title('Canny Edge Detection')
plt.imshow(edges_canny, cmap='gray')

plt.tight_layout()
plt.show()
```

## Experiment 8:- 2D to 3D
```
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
# height = cv2.resize(height, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

# Exaggerate height
height = height * 2

# Threshold for silhouette
_, silhouette = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)

# Meshgrid for x & y coordinates
X, Y = np.meshgrid(np.arange(img.shape[1]), np.arange(img.shape[0]))

X = X.astype(np.float32)
Y = Y.astype(np.float32)

# # Resize X and Y to match height map  <- Removed this resizing
# X = cv2.resize(X, (2000, 1334))
# Y = cv2.resize(Y, (2000, 1334))

# Instead, resize height to match X and Y
height = cv2.resize(height, (img.shape[1], img.shape[0]), interpolation=cv2.INTER_CUBIC) 


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
```
## Experiment 9:- Contrast Enhancement using Histogram Equalization
```
import cv2
import numpy as np
import matplotlib.pyplot as plt

class ContrastEnhancer:
    """
    A class for enhancing image contrast using histogram equalization
    with visualization capabilities.
    """

    def __init__(self):
        self.original_image = None
        self.enhanced_image = None
        self.original_hist = None
        self.enhanced_hist = None

    def load_image(self, image_path):
        """
        Load an image from the specified path.

        Args:
            image_path (str): Path to the input image

        Returns:
            bool: True if image loaded successfully, False otherwise
        """
        try:
            # Read image in grayscale
            self.original_image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
            if self.original_image is None:
                raise ValueError("Image could not be loaded")
            return True
        except Exception as e:
            print(f"Error loading image: {str(e)}")
            return False

    def calculate_histogram(self, image):
        """
        Calculate the histogram of the input image.

        Args:
            image (numpy.ndarray): Input image

        Returns:
            numpy.ndarray: Histogram values
        """
        hist = cv2.calcHist([image], [0], None, [256], [0, 256])
        return hist.ravel()

    def enhance_contrast(self):
        """
        Enhance the contrast of the loaded image using histogram equalization.

        Returns:
            bool: True if enhancement was successful, False otherwise
        """
        if self.original_image is None:
            print("No image loaded")
            return False

        # Perform histogram equalization
        self.enhanced_image = cv2.equalizeHist(self.original_image)

        # Calculate histograms
        self.original_hist = self.calculate_histogram(self.original_image)
        self.enhanced_hist = self.calculate_histogram(self.enhanced_image)

        return True

    def visualize_results(self, figure_size=(15, 10)):
        """
        Visualize the original and enhanced images along with their histograms.

        Args:
            figure_size (tuple): Size of the figure (width, height)
        """
        if any(x is None for x in [self.original_image, self.enhanced_image,
                                 self.original_hist, self.enhanced_hist]):
            print("Please enhance the image first")
            return

        fig, axes = plt.subplots(2, 2, figsize=figure_size)
        fig.suptitle('Image Contrast Enhancement Results', fontsize=16)

        # Plot original image
        axes[0, 0].imshow(self.original_image, cmap='gray')
        axes[0, 0].set_title('Original Image')
        axes[0, 0].axis('off')

        # Plot enhanced image
        axes[0, 1].imshow(self.enhanced_image, cmap='gray')
        axes[0, 1].set_title('Enhanced Image')
        axes[0, 1].axis('off')

        # Plot original histogram
        axes[1, 0].plot(self.original_hist, color='black')
        axes[1, 0].set_title('Original Histogram')
        axes[1, 0].set_xlabel('Pixel Intensity')
        axes[1, 0].set_ylabel('Frequency')
        axes[1, 0].grid(True, alpha=0.2)

        # Plot enhanced histogram
        axes[1, 1].plot(self.enhanced_hist, color='black')
        axes[1, 1].set_title('Enhanced Histogram')
        axes[1, 1].set_xlabel('Pixel Intensity')
        axes[1, 1].set_ylabel('Frequency')
        axes[1, 1].grid(True, alpha=0.2)

        plt.tight_layout()
        plt.show()

    def save_results(self, output_path):
        """
        Save the enhanced image to disk.

        Args:
            output_path (str): Path where the enhanced image should be saved

        Returns:
            bool: True if save was successful, False otherwise
        """
        if self.enhanced_image is None:
            print("No enhanced image to save")
            return False

        try:
            cv2.imwrite(output_path, self.enhanced_image)
            return True
        except Exception as e:
            print(f"Error saving image: {str(e)}")
            return False

def main():
    """
    Example usage of the ContrastEnhancer class.
    """
    # Initialize the enhancer
    enhancer = ContrastEnhancer()

    # Load an image
    image_path = "/content/cv9,10.webp"  # Replace with your image path
    if not enhancer.load_image(image_path):
        return

    # Enhance contrast
    if not enhancer.enhance_contrast():
        return

    # Visualize results
    enhancer.visualize_results()

    # Save enhanced image
    enhancer.save_results("enhanced_image.jpg")

if __name__ == "__main__":
    main()
```

## Experiment 10:- Binary Thresholding for GrayScale Images
```
import numpy as np
import cv2
import matplotlib.pyplot as plt
from typing import Tuple, Union

class ImageThresholder:
    """A class for applying various binary thresholding techniques to grayscale images."""

    def __init__(self, image_path: str = None):
        """
        Initialize the thresholder with an optional image path.

        Args:
            image_path (str, optional): Path to the input image
        """
        self.image = None
        self.binary_image = None
        if image_path:
            self.load_image(image_path)

    def load_image(self, image_path: str) -> None:
        """
        Load and convert image to grayscale.

        Args:
            image_path (str): Path to the input image
        """
        try:
            # Read image and convert to grayscale if necessary
            img = cv2.imread(image_path)
            if img is None:
                raise FileNotFoundError(f"Could not load image at {image_path}")

            if len(img.shape) == 3:
                self.image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            else:
                self.image = img

        except Exception as e:
            raise Exception(f"Error loading image: {str(e)}")

    def basic_threshold(self, threshold: int = 127) -> np.ndarray:
        """
        Apply basic binary thresholding.

        Args:
            threshold (int): Threshold value (0-255)

        Returns:
            np.ndarray: Binary image
        """
        if self.image is None:
            raise ValueError("No image loaded")

        _, binary = cv2.threshold(self.image, threshold, 255, cv2.THRESH_BINARY)
        self.binary_image = binary
        return binary

    def adaptive_threshold(self, block_size: int = 11, C: int = 2) -> np.ndarray:
        """
        Apply adaptive thresholding using Gaussian weighted sum.

        Args:
            block_size (int): Size of pixel neighborhood used to calculate threshold value
            C (int): Constant subtracted from the weighted sum

        Returns:
            np.ndarray: Binary image
        """
        if self.image is None:
            raise ValueError("No image loaded")

        # Ensure block_size is odd
        block_size = block_size if block_size % 2 == 1 else block_size + 1

        binary = cv2.adaptiveThreshold(
            self.image,
            255,
            cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
            cv2.THRESH_BINARY,
            block_size,
            C
        )
        self.binary_image = binary
        return binary

    def otsu_threshold(self) -> Tuple[np.ndarray, float]:
        """
        Apply Otsu's thresholding method.

        Returns:
            Tuple[np.ndarray, float]: Binary image and computed threshold value
        """
        if self.image is None:
            raise ValueError("No image loaded")

        threshold, binary = cv2.threshold(
            self.image,
            0,  # Initial threshold value, will be ignored
            255,
            cv2.THRESH_BINARY + cv2.THRESH_OTSU
        )
        self.binary_image = binary
        return binary, threshold

    def visualize_results(self,
                         original: bool = True,
                         histogram: bool = True,
                         threshold_line: Union[int, None] = None) -> None:
        """
        Visualize the original image, binary result, and histogram.

        Args:
            original (bool): Whether to show original image
            histogram (bool): Whether to show histogram
            threshold_line (int, optional): Threshold value to mark on histogram
        """
        if self.image is None:
            raise ValueError("No image loaded")
        if self.binary_image is None:
            raise ValueError("No thresholding has been applied yet")

        # Calculate number of subplots needed
        n_plots = sum([original, True, histogram])  # binary always shown
        fig, axes = plt.subplots(1, n_plots, figsize=(5*n_plots, 5))

        if n_plots == 1:
            axes = [axes]

        plot_idx = 0

        if original:
            axes[plot_idx].imshow(self.image, cmap='gray')
            axes[plot_idx].set_title('Original Grayscale')
            axes[plot_idx].axis('off')
            plot_idx += 1

        axes[plot_idx].imshow(self.binary_image, cmap='gray')
        axes[plot_idx].set_title('Binary Result')
        axes[plot_idx].axis('off')
        plot_idx += 1

        if histogram:
            hist = cv2.calcHist([self.image], [0], None, [256], [0, 256])
            axes[plot_idx].plot(hist)
            axes[plot_idx].set_title('Histogram')
            axes[plot_idx].grid(True)

            if threshold_line is not None:
                axes[plot_idx].axvline(x=threshold_line, color='r', linestyle='--')
                axes[plot_idx].text(threshold_line+5, hist.max()/2,
                                  f'Threshold: {threshold_line}',
                                  rotation=90)

        plt.tight_layout()
        plt.show()

    def save_result(self, output_path: str) -> None:
        """
        Save the binary image result.

        Args:
            output_path (str): Path to save the binary image
        """
        if self.binary_image is None:
            raise ValueError("No thresholding has been applied yet")

        cv2.imwrite(output_path, self.binary_image)

# Example usage
def main():
    # Create thresholder instance
    thresholder = ImageThresholder()

    # Load sample image (replace with your image path)
    thresholder.load_image('/content/cv9,10.webp')

    # 1. Basic thresholding
    print("Applying basic thresholding...")
    binary = thresholder.basic_threshold(threshold=127)
    thresholder.visualize_results(threshold_line=127)

    # 2. Adaptive thresholding
    print("\nApplying adaptive thresholding...")
    binary = thresholder.adaptive_threshold(block_size=11, C=2)
    thresholder.visualize_results()

    # 3. Otsu's thresholding
    print("\nApplying Otsu's thresholding...")
    binary, otsu_threshold = thresholder.otsu_threshold()
    print(f"Otsu's computed threshold: {otsu_threshold:.2f}")
    thresholder.visualize_results(threshold_line=otsu_threshold)

if __name__ == "__main__":
    main()
```