import { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Loader2, Zap, Diamond, Wallet } from 'lucide-react';

interface MintingStats {
  totalSupply: number;
  minted: number;
  price: number;
  maxPerWallet: number;
}

export const MintingInterface = () => {
  const { connected, publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();
  const [isMinting, setIsMinting] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);

  // Mock data - replace with actual candy machine data
  const [stats] = useState<MintingStats>({
    totalSupply: 10000,
    minted: 3247,
    price: 0.5, // SOL
    maxPerWallet: 5
  });

  const handleMint = async () => {
    if (!connected || !publicKey || !signTransaction) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to mint NFTs",
        variant: "destructive"
      });
      return;
    }

    setIsMinting(true);
    
    try {
      // This is where you would implement the actual minting logic
      // using your candy machine ID and Metaplex SDK
      
      toast({
        title: "Minting initiated!",
        description: `Attempting to mint ${mintAmount} NFT${mintAmount > 1 ? 's' : ''}...`,
      });

      // Simulate minting process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "Mint successful!",
        description: `Successfully minted ${mintAmount} Diamond Nutted Nation NFT${mintAmount > 1 ? 's' : ''}!`,
      });

    } catch (error) {
      console.error('Minting error:', error);
      toast({
        title: "Minting failed",
        description: "There was an error during the minting process. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsMinting(false);
    }
  };

  const progress = (stats.minted / stats.totalSupply) * 100;

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-neon p-6 text-center">
          <div className="text-2xl font-bold text-neon-primary mb-2">{stats.minted.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Minted</div>
        </Card>
        
        <Card className="card-neon p-6 text-center">
          <div className="text-2xl font-bold text-neon-secondary mb-2">{stats.totalSupply.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Supply</div>
        </Card>
        
        <Card className="card-neon p-6 text-center">
          <div className="text-2xl font-bold text-neon-accent mb-2">{stats.price} SOL</div>
          <div className="text-sm text-muted-foreground">Price</div>
        </Card>
        
        <Card className="card-neon p-6 text-center">
          <div className="text-2xl font-bold text-neon-primary mb-2">{stats.maxPerWallet}</div>
          <div className="text-sm text-muted-foreground">Max Per Wallet</div>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card className="card-neon p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-neon-primary">Minting Progress</h3>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {progress.toFixed(1)}% Complete
          </Badge>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-500 shadow-neon-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>{stats.minted.toLocaleString()} minted</span>
          <span>{(stats.totalSupply - stats.minted).toLocaleString()} remaining</span>
        </div>
      </Card>

      {/* Minting Interface */}
      <Card className="card-neon p-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Diamond className="w-16 h-16 text-primary animate-float" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-neon-primary mb-2">Mint Your Diamond</h2>
            <p className="text-muted-foreground">
              Join the Diamond Nutted Nation and mint your exclusive NFT
            </p>
          </div>

          {connected ? (
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
                  disabled={mintAmount <= 1 || isMinting}
                  className="btn-neon-outline"
                >
                  -
                </Button>
                <div className="text-2xl font-bold text-neon-primary min-w-[3rem] text-center">
                  {mintAmount}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMintAmount(Math.min(stats.maxPerWallet, mintAmount + 1))}
                  disabled={mintAmount >= stats.maxPerWallet || isMinting}
                  className="btn-neon-outline"
                >
                  +
                </Button>
              </div>

              <div className="text-center">
                <div className="text-lg font-semibold text-neon-accent">
                  Total: {(stats.price * mintAmount).toFixed(2)} SOL
                </div>
                <div className="text-sm text-muted-foreground">
                  + network fees
                </div>
              </div>

              <Button
                onClick={handleMint}
                disabled={isMinting}
                className="btn-neon-primary w-full py-6 text-lg"
              >
                {isMinting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Minting...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Mint {mintAmount} NFT{mintAmount > 1 ? 's' : ''}
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Wallet className="w-12 h-12 text-muted-foreground" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Connect your wallet to start minting
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports Phantom, Solflare, and other Solana wallets
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};