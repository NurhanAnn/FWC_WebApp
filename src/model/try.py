

# import os

# # Verify the file exists
# file_path = 'C:\\Users\\user\\anaconda3\\envs\\tfjs_clean\\Lib\\site-packages\\tensorflow_decision_forests\\tensorflow\\ops\\inference\\inference.so'
# if not os.path.isfile(file_path):
#     raise FileNotFoundError(f"The file {file_path} does not exist.")

# # Set the PATH environment variable
# inference_so_dir = 'C:\\Users\\user\\anaconda3\\envs\\tfjs_clean\\Lib\\site-packages\\tensorflow_decision_forests\\tensorflow\\ops\\inference'
# os.environ['PATH'] = inference_so_dir + os.pathsep + os.environ['PATH']

# # Import tensorflow_decision_forests
# try:
#     import tensorflow_decision_forests as tfdf
#     print("Successfully imported tensorflow_decision_forests.")
# except Exception as e:
#     print(f"Error importing tensorflow_decision_forests: {e}")

import torch

if torch.cuda.is_available():
    print("GPU is available")
else:
    print("GPU is not available")

import tensorflow as tf
print("Num GPUs Available: ", len(tf.config.experimental.list_physical_devices('GPU')))

