from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent
with ZipFile(root / 'instacalm-extension.zip', 'w', ZIP_DEFLATED) as archive:
    for path in sorted((root / 'extension').iterdir()):
        if path.is_file():
            archive.write(path, path.name)
print('Built instacalm-extension.zip')
