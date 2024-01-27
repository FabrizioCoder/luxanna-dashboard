import React from 'react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Profile',
      description: 'Get your League of Legends profile information',
      image: '/ProfileExample.png',
      props: {
        width: 522,
        height: 562,
      },
    },
    {
      title: 'Ranked',
      description: 'Get your League of Legends ranked information',
      image: '/RankedExample.png',
      props: {
        width: 616,
        height: 297,
      },
    },
    {
      title: 'Match History',
      description: 'Get your League of Legends match history information',
      image: '/MatchHistoryExample.png',
      props: {
        width: 615,
        height: 305,
      },
    },
  ];

  return (
    <div className="features">
      <h2 className="section-title">Features</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
