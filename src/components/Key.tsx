import { KeyFunction, AbilityInfo } from '../types';

interface KeyProps {
  keyName: string;
  assignedFunction?: KeyFunction;
  abilityInfo?: AbilityInfo;
  onClick: () => void;
  className?: string;
}

const functionColors: Record<KeyFunction, string> = {
  'Primary Mitigation': 'bg-red-600 hover:bg-red-700',
  'Secondary Mitigation': 'bg-orange-600 hover:bg-orange-700',
  'Ground Effect': 'bg-yellow-600 hover:bg-yellow-700',
  'Primary Builder': 'bg-green-600 hover:bg-green-700',
  'Spender': 'bg-blue-600 hover:bg-blue-700',
  'AoE Damage': 'bg-cyan-600 hover:bg-cyan-700',
  'Pull/Grip': 'bg-teal-600 hover:bg-teal-700',
  'Mobility': 'bg-purple-600 hover:bg-purple-700',
  'Interrupt': 'bg-pink-600 hover:bg-pink-700',
  'Taunt': 'bg-indigo-600 hover:bg-indigo-700',
  'Defensive Cooldown': 'bg-red-700 hover:bg-red-800',
  'Offensive Cooldown': 'bg-blue-700 hover:bg-blue-800',
  'Utility': 'bg-gray-600 hover:bg-gray-700',
  'Unassigned': 'bg-gray-800 hover:bg-gray-700',
};

export default function Key({ keyName, assignedFunction, abilityInfo, onClick, className = '' }: KeyProps) {
  const colorClass = assignedFunction ? functionColors[assignedFunction] : functionColors['Unassigned'];
  const iconUrl = abilityInfo ? `https://wow.zamimg.com/images/wow/icons/large/${abilityInfo.icon}.jpg` : null;

  return (
    <button
      onClick={onClick}
      className={`
        ${colorClass}
        ${className}
        rounded border-2 border-gray-700
        transition-all duration-150
        flex flex-col items-center justify-center
        text-xs font-bold
        cursor-pointer
        shadow-lg
        active:scale-95
        p-1
        relative
        overflow-hidden
      `}
    >
      <div className="text-[10px] text-gray-300 z-10">{keyName}</div>
      {iconUrl && abilityInfo && (
        <div className="mt-1 w-10 h-10 rounded border border-gray-900 overflow-hidden">
          <img
            src={iconUrl}
            alt={abilityInfo.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
    </button>
  );
}
