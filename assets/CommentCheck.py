from pathlib import Path
import sys
for path in Path('src').rglob('*.ts'):
    with path.open() as f:
        if(f.readline().strip() != '// Name: William Burton  ID: 1505616'.strip()):
            print('0')
            sys.exit(0)
print('1')
sys.exit(0)

    