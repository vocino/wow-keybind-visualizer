// Tank specializations in WoW
export type TankSpec =
  | 'Protection Warrior'
  | 'Protection Paladin'
  | 'Blood Death Knight'
  | 'Brewmaster Monk'
  | 'Guardian Druid'
  | 'Vengeance Demon Hunter';

// Abstract function categories for keybinds
export type KeyFunction =
  | 'Primary Mitigation'
  | 'Secondary Mitigation'
  | 'Ground Effect'
  | 'Primary Builder'
  | 'Spender'
  | 'AoE Damage'
  | 'Pull/Grip'
  | 'Mobility'
  | 'Interrupt'
  | 'Taunt'
  | 'Defensive Cooldown'
  | 'Offensive Cooldown'
  | 'Utility'
  | 'Unassigned';

// Ability information with name and icon
export interface AbilityInfo {
  name: string;
  icon: string; // Icon filename for wowhead CDN
}

// Mapping of key function to specific ability per spec
export type AbilityMapping = {
  [key in TankSpec]?: AbilityInfo;
};

// A keybind assignment
export interface KeyAssignment {
  key: string;
  function: KeyFunction;
  abilities: AbilityMapping;
}

// App state
export interface AppState {
  currentSpec: TankSpec;
  keybinds: Map<string, KeyAssignment>;
}
