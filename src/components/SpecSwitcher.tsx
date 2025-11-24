import { TankSpec } from '../types';

interface SpecSwitcherProps {
  currentSpec: TankSpec;
  onSpecChange: (spec: TankSpec) => void;
}

const tankSpecs: TankSpec[] = [
  'Protection Warrior',
  'Protection Paladin',
  'Blood Death Knight',
  'Brewmaster Monk',
  'Guardian Druid',
  'Vengeance Demon Hunter',
];

const specColors: Record<TankSpec, string> = {
  'Protection Warrior': 'bg-amber-700 hover:bg-amber-600',
  'Protection Paladin': 'bg-pink-600 hover:bg-pink-500',
  'Blood Death Knight': 'bg-red-800 hover:bg-red-700',
  'Brewmaster Monk': 'bg-green-700 hover:bg-green-600',
  'Guardian Druid': 'bg-orange-700 hover:bg-orange-600',
  'Vengeance Demon Hunter': 'bg-purple-700 hover:bg-purple-600',
};

export default function SpecSwitcher({ currentSpec, onSpecChange }: SpecSwitcherProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
      <div className="flex border-b border-gray-700">
        {tankSpecs.map((spec) => (
          <button
            key={spec}
            onClick={() => onSpecChange(spec)}
            className={`
              ${specColors[spec]}
              ${currentSpec === spec ? 'opacity-100 border-b-4 border-white' : 'opacity-70'}
              flex-1 px-6 py-4 font-semibold text-sm
              transition-all duration-150
              hover:opacity-100
              active:scale-95
            `}
          >
            {spec}
          </button>
        ))}
      </div>
    </div>
  );
}
