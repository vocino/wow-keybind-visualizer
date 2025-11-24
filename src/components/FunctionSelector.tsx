import { KeyFunction } from '../types';
import { abilityMappings } from '../data/abilities';

interface FunctionSelectorProps {
  keyName: string;
  currentFunction?: KeyFunction;
  onSelect: (fn: KeyFunction) => void;
  onClose: () => void;
}

const allFunctions: KeyFunction[] = [
  'Primary Mitigation',
  'Secondary Mitigation',
  'Ground Effect',
  'Primary Builder',
  'Spender',
  'AoE Damage',
  'Pull/Grip',
  'Mobility',
  'Interrupt',
  'Taunt',
  'Defensive Cooldown',
  'Offensive Cooldown',
  'Utility',
  'Unassigned',
];

const functionDescriptions: Record<KeyFunction, string> = {
  'Primary Mitigation': 'Your main active mitigation ability',
  'Secondary Mitigation': 'Additional defensive or healing ability',
  'Ground Effect': 'Area damage or control abilities',
  'Primary Builder': 'Main resource generator',
  'Spender': 'Resource-spending damage ability',
  'AoE Damage': 'Multi-target damage abilities for packs',
  'Pull/Grip': 'Abilities to pull or grip enemies',
  'Mobility': 'Movement and gap-closer abilities',
  'Interrupt': 'Interrupt/silence abilities',
  'Taunt': 'Taunt abilities',
  'Defensive Cooldown': 'Major defensive cooldowns',
  'Offensive Cooldown': 'Major offensive cooldowns',
  'Utility': 'Utility and support abilities',
  'Unassigned': 'Remove assignment from this key',
};

export default function FunctionSelector({ keyName, currentFunction, onSelect, onClose }: FunctionSelectorProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Assign Function to Key: {keyName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-2">
          {allFunctions.map((fn) => {
            const abilities = abilityMappings[fn];
            const isSelected = fn === currentFunction;

            return (
              <button
                key={fn}
                onClick={() => onSelect(fn)}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${isSelected
                    ? 'border-blue-500 bg-blue-900 bg-opacity-30'
                    : 'border-gray-600 bg-gray-700 hover:bg-gray-600'
                  }
                `}
              >
                <div className="font-bold text-lg mb-1">{fn}</div>
                <div className="text-sm text-gray-300 mb-2">
                  {functionDescriptions[fn]}
                </div>
                {fn !== 'Unassigned' && (
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {Object.entries(abilities).map(([spec, abilityInfo]) => (
                      <div key={spec} className="flex items-center gap-2 bg-gray-800 p-2 rounded">
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/medium/${abilityInfo.icon}.jpg`}
                          alt={abilityInfo.name}
                          className="w-8 h-8 rounded border border-gray-600"
                          loading="lazy"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-300 truncate">{spec}</div>
                          <div className="text-xs text-gray-400 truncate">{abilityInfo.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
