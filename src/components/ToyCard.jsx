import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ToyCardProps {
  toy: {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    image: string;
    description: string;
  };
}

export function ToyCard({ toy }: ToyCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={toy.image}
          alt={toy.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1">{toy.name}</CardTitle>
          <Badge variant="secondary">{toy.category}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{toy.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
          <span>{toy.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-primary">${toy.price.toFixed(2)}</span>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
