import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import logo from '@/assets/logo.png';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Diamond Nutted Nation" 
            className="w-12 h-12 rounded-lg shadow-neon-primary animate-glow"
          />
          <div>
            <h1 className="text-xl font-bold text-neon-primary">Diamond Nutted Nation</h1>
            <p className="text-sm text-muted-foreground">NFT Collection</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <WalletMultiButton className="btn-neon-primary" />
        </div>
      </div>
    </header>
  );
};