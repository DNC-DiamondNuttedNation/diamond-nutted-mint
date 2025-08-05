import { Diamond, Twitter, MessageCircle, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Diamond className="w-8 h-8 text-primary animate-glow" />
              <span className="text-xl font-bold text-neon-primary">Diamond Nutted Nation</span>
            </div>
            <p className="text-muted-foreground">
              The most exclusive NFT collection on Solana. Join the diamond revolution.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neon-secondary mb-4">Collection</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Mint NFTs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rarity Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neon-accent mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reddit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neon-primary mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Diamond Nutted Nation. All rights reserved. Built on Solana.</p>
        </div>
      </div>
    </footer>
  );
};