import { KeyAssignment, TankSpec } from '../types';
import Key from './Key';

interface KeyboardProps {
  keybinds: Map<string, KeyAssignment>;
  currentSpec: TankSpec;
  onKeyClick: (keyName: string) => void;
}

// Define full keyboard layout with realistic spacing
const keyboardLayout = [
  // Function keys row
  [
    { key: 'Esc', width: 'w-14' },
    { key: 'spacer', width: 'w-8', spacer: true },
    { key: 'F1', width: 'w-14' },
    { key: 'F2', width: 'w-14' },
    { key: 'F3', width: 'w-14' },
    { key: 'F4', width: 'w-14' },
    { key: 'spacer', width: 'w-4', spacer: true },
    { key: 'F5', width: 'w-14' },
    { key: 'F6', width: 'w-14' },
    { key: 'F7', width: 'w-14' },
    { key: 'F8', width: 'w-14' },
    { key: 'spacer', width: 'w-4', spacer: true },
    { key: 'F9', width: 'w-14' },
    { key: 'F10', width: 'w-14' },
    { key: 'F11', width: 'w-14' },
    { key: 'F12', width: 'w-14' },
  ],
  // Number row
  [
    { key: '`', width: 'w-14' },
    { key: '1', width: 'w-14' },
    { key: '2', width: 'w-14' },
    { key: '3', width: 'w-14' },
    { key: '4', width: 'w-14' },
    { key: '5', width: 'w-14' },
    { key: '6', width: 'w-14' },
    { key: '7', width: 'w-14' },
    { key: '8', width: 'w-14' },
    { key: '9', width: 'w-14' },
    { key: '0', width: 'w-14' },
    { key: '-', width: 'w-14' },
    { key: '=', width: 'w-14' },
    { key: 'Backspace', width: 'w-20' },
  ],
  // QWERTY row
  [
    { key: 'Tab', width: 'w-16' },
    { key: 'Q', width: 'w-14' },
    { key: 'W', width: 'w-14' },
    { key: 'E', width: 'w-14' },
    { key: 'R', width: 'w-14' },
    { key: 'T', width: 'w-14' },
    { key: 'Y', width: 'w-14' },
    { key: 'U', width: 'w-14' },
    { key: 'I', width: 'w-14' },
    { key: 'O', width: 'w-14' },
    { key: 'P', width: 'w-14' },
    { key: '[', width: 'w-14' },
    { key: ']', width: 'w-14' },
    { key: '\\', width: 'w-16' },
  ],
  // ASDF row
  [
    { key: 'Caps', width: 'w-20' },
    { key: 'A', width: 'w-14' },
    { key: 'S', width: 'w-14' },
    { key: 'D', width: 'w-14' },
    { key: 'F', width: 'w-14' },
    { key: 'G', width: 'w-14' },
    { key: 'H', width: 'w-14' },
    { key: 'J', width: 'w-14' },
    { key: 'K', width: 'w-14' },
    { key: 'L', width: 'w-14' },
    { key: ';', width: 'w-14' },
    { key: '\'', width: 'w-14' },
    { key: 'Enter', width: 'w-24' },
  ],
  // ZXCV row
  [
    { key: 'Shift', width: 'w-24' },
    { key: 'Z', width: 'w-14' },
    { key: 'X', width: 'w-14' },
    { key: 'C', width: 'w-14' },
    { key: 'V', width: 'w-14' },
    { key: 'B', width: 'w-14' },
    { key: 'N', width: 'w-14' },
    { key: 'M', width: 'w-14' },
    { key: ',', width: 'w-14' },
    { key: '.', width: 'w-14' },
    { key: '/', width: 'w-14' },
    { key: 'RShift', width: 'w-28' },
  ],
  // Bottom row
  [
    { key: 'Ctrl', width: 'w-16' },
    { key: 'Win', width: 'w-14' },
    { key: 'Alt', width: 'w-14' },
    { key: 'Space', width: 'w-80' },
    { key: 'RAlt', width: 'w-14' },
    { key: 'Fn', width: 'w-14' },
    { key: 'Menu', width: 'w-14' },
    { key: 'RCtrl', width: 'w-16' },
  ],
];

// Mouse buttons layout (displayed to the right)
const mouseLayout = [
  [
    { key: 'Mouse3', width: 'w-20' },
  ],
  [
    { key: 'Mouse4', width: 'w-20' },
  ],
  [
    { key: 'Mouse5', width: 'w-20' },
  ],
  [
    { key: 'MWheel↑', width: 'w-20' },
  ],
  [
    { key: 'MWheel↓', width: 'w-20' },
  ],
  [
    { key: 'Shift+MWheel↑', width: 'w-28' },
  ],
  [
    { key: 'Shift+MWheel↓', width: 'w-28' },
  ],
];

export default function Keyboard({ keybinds, currentSpec, onKeyClick }: KeyboardProps) {
  const renderKey = (key: string, width: string) => {
    const assignment = keybinds.get(key);
    const abilityInfo = assignment?.abilities[currentSpec];

    return (
      <Key
        key={key}
        keyName={key}
        assignedFunction={assignment?.function}
        abilityInfo={abilityInfo}
        onClick={() => onKeyClick(key)}
        className={`${width} h-14`}
      />
    );
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full">
      <div className="flex gap-8">
        {/* Main Keyboard */}
        <div className="space-y-2">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1">
              {row.map((item, itemIndex) => {
                // Handle spacers
                if ('spacer' in item && item.spacer) {
                  return <div key={`spacer-${rowIndex}-${itemIndex}`} className={item.width} />;
                }

                const { key, width } = item;
                return renderKey(key, width);
              })}
            </div>
          ))}
        </div>

        {/* Mouse Buttons */}
        <div className="space-y-2">
          <div className="text-sm font-bold text-gray-400 text-center mb-2">Mouse</div>
          {mouseLayout.map((row, rowIndex) => (
            <div key={`mouse-${rowIndex}`} className="flex gap-1">
              {row.map((item) => {
                const { key, width } = item;
                return renderKey(key, width);
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
