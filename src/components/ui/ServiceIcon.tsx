import React from 'react';
import { 
  Rocket, 
  ClipboardCheck, 
  Coins, 
  Map, 
  Users, 
  HelpCircle,
} from 'lucide-react';

export type IconName = 'rocket' | 'clipboard-check' | 'coins' | 'map' | 'users' | 'help-circle';

interface ServiceIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ 
  name, 
  size = 32, 
  className = '' 
}) => {
  const getIcon = () => {
    switch (name) {
      case 'rocket': return <Rocket size={size} />;
      case 'clipboard-check': return <ClipboardCheck size={size} />;
      case 'coins': return <Coins size={size} />;
      case 'map': return <Map size={size} />;
      case 'users': return <Users size={size} />;
      case 'help-circle': return <HelpCircle size={size} />;
      default: return <HelpCircle size={size} />;
    }
  };

  return (
    <div className={`service-icon-box ${className}`}>
      {getIcon()}
    </div>
  );
};
