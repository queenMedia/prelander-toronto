import os
from PIL import Image

# Función para convertir una imagen a WebP
def convert_to_webp(input_image_path, output_image_path, quality=70):
    image = Image.open(input_image_path)
    image.save(output_image_path, 'webp', quality=quality)

# Función para procesar una carpeta
def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp')):
                input_image_path = os.path.join(root, filename)
                webp_image_path = os.path.splitext(input_image_path)[0] + '.webp'

                # Convertir la imagen a WebP
                convert_to_webp(input_image_path, webp_image_path)

                # Eliminar la imagen original
                os.remove(input_image_path)

# Directorio raíz que se procesará de manera recursiva
root_directory = './assets'

# Llamar a la función para procesar la carpeta
process_folder(root_directory)
