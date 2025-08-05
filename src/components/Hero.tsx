import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { Diamond, Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  const scrollToMinting = () => {
    const mintingSection = document.getElementById('minting');
    if (mintingSection) {
      mintingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-primary animate-float">
        <Diamond className="w-8 h-8 animate-glow" />
      </div>
      <div className="absolute top-40 right-20 text-secondary animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 animate-glow" />
      </div>
      <div className="absolute bottom-40 left-20 text-accent animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-10 h-10 animate-glow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-neon-primary animate-neon-pulse">Diamond</span>{' '}
            <span className="text-neon-secondary animate-neon-pulse" style={{ animationDelay: '0.5s' }}>Nutted</span>{' '}
            <span className="text-neon-accent animate-neon-pulse" style={{ animationDelay: '1s' }}>Nation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join the most exclusive NFT collection in the Solana ecosystem. 
            Each diamond represents unbreakable strength and limitless potential.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToMinting}
            className="btn-neon-primary text-lg px-8 py-6"
          >
            <Diamond className="w-5 h-5 mr-2" />
            Start Minting
          </Button>
          
          <Button 
            variant="outline"
            className="btn-neon-outline text-lg px-8 py-6"
            onClick={() => window.open('https://docs.metaplex.com/', '_blank')}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="card-neon p-6 text-center">
            <Diamond className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h3 className="text-lg font-semibold text-neon-primary mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              Hand-crafted digital diamonds with unique traits and rarity levels
            </p>
          </div>
          
          <div className="card-neon p-6 text-center">
            <Zap className="w-12 h-12 text-secondary mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }} />
            <h3 className="text-lg font-semibold text-neon-secondary mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Built on Solana for instant transactions and minimal fees
            </p>
          </div>
          
          <div className="card-neon p-6 text-center">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4 animate-float" style={{ animationDelay: '2s' }} />
            <h3 className="text-lg font-semibold text-neon-accent mb-2">Exclusive Access</h3>
            <p className="text-sm text-muted-foreground">
              Holders gain access to exclusive events and future collections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};