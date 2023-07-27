import os
from PIL import Image

def convert_and_compress_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGB")
        img = img.save(output_path, format="JPEG", quality=85)
        return True
    except Exception as e:
        print(f"Error converting {input_path}: {e}")
        return False

def process_folder(folder_path, output_folder):
    for root, _, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            _, file_extension = os.path.splitext(file_path)
            if file_extension.lower() in ['.svg', '.png']:
                relative_path = os.path.relpath(file_path, folder_path)
                compressed_folder_path = os.path.join(output_folder, os.path.dirname(relative_path))
                compressed_file_path = os.path.join(compressed_folder_path, f"{os.path.splitext(file)[0]}_compressed.jpg")
                
                os.makedirs(compressed_folder_path, exist_ok=True)
                if convert_and_compress_image(file_path, compressed_file_path):
                    print(f"Converted and compressed {file_path} to {compressed_file_path}")

if __name__ == "__main__":
    # Replace these paths with your desired input and output folders.
    input_folder = "/path/to/original_folder"
    output_folder = "/path/to/compressed_folder"
    
    process_folder(input_folder, output_folder)
