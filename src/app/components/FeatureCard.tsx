import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  props: {
    width: number;
    height: number;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  props: { width, height },
}) => {
  return (
    <div className="feature-card">
      <Image
        width={width}
        height={height}
        src={image}
        alt={title}
        quality={100}
        className="feature-image"
      />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
