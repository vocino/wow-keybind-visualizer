import { useState } from 'react';
import { TankSpec, KeyFunction, KeyAssignment } from './types';
import { abilityMappings } from './data/abilities';
import Keyboard from './components/Keyboard';
import SpecSwitcher from './components/SpecSwitcher';
import FunctionSelector from './components/FunctionSelector';

function App() {
  const [currentSpec, setCurrentSpec] = useState<TankSpec>('Protection Warrior');
  const [keybinds, setKeybinds] = useState<Map<string, KeyAssignment>>(new Map());
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleKeyClick = (keyName: string) => {
    setSelectedKey(keyName);
  };

  const handleFunctionSelect = (fn: KeyFunction) => {
    if (!selectedKey) return;

    const newKeybinds = new Map(keybinds);

    if (fn === 'Unassigned') {
      newKeybinds.delete(selectedKey);
    } else {
      newKeybinds.set(selectedKey, {
        key: selectedKey,
        function: fn,
        abilities: abilityMappings[fn],
      });
    }

    setKeybinds(newKeybinds);
    setSelectedKey(null);
  };

  const currentAssignment = selectedKey ? keybinds.get(selectedKey) : undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex flex-col min-h-screen">
        <header className="text-center py-6 px-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            WoW Keybind Visualizer
          </h1>
          <p className="text-gray-400 text-lg">
            Create unified keybinds across all tank specs
          </p>
        </header>

        <div className="px-8 mb-6">
          <SpecSwitcher
            currentSpec={currentSpec}
            onSpecChange={setCurrentSpec}
          />
        </div>

        <div className="flex-1 px-8 pb-8">
          <Keyboard
            keybinds={keybinds}
            currentSpec={currentSpec}
            onKeyClick={handleKeyClick}
          />
        </div>

        <footer className="text-center py-4 text-gray-500 text-sm bg-gray-800 bg-opacity-50">
          <div className="flex justify-center items-center gap-8">
            <p>Fan-made tool • Not affiliated with Blizzard Entertainment</p>
            <p className="text-blue-400 font-semibold">{keybinds.size} keys assigned</p>
            <p className="text-gray-400">Click any key to assign a function</p>
          </div>
        </footer>
      </div>

      {selectedKey && (
        <FunctionSelector
          keyName={selectedKey}
          currentFunction={currentAssignment?.function}
          onSelect={handleFunctionSelect}
          onClose={() => setSelectedKey(null)}
        />
      )}
    </div>
  );
}

export default App;
