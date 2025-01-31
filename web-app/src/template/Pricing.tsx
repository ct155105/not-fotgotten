import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Section title="Flexible Plans" subtitle="Pricing">
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <PricingCard
        name="FREE"
        price="$0 / mo"
        description="Best for individuals"
        button={
          <Link href="/">
            <Button full secondary>
              Get Started
            </Button>
          </Link>
        }
      >
        <PricingFeature text="1 Team Members" />
        <PricingFeature text="1 Website" />
        <PricingFeature text="1 GB Storage" />
        <PricingFeature text="1 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
      <PricingCard
        name="PREMIUM"
        price="$19 / mo"
        description="Best for small teams"
        popular
        button={
          <Link href="/">
            <Button full>Get Started</Button>
          </Link>
        }
      >
        <PricingFeature text="5 Team Members" />
        <PricingFeature text="5 Website" />
        <PricingFeature text="5 GB Storage" />
        <PricingFeature text="5 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
      <PricingCard
        name="ENTERPRISE"
        price="$99 / mo"
        description="Best for industry leader"
        button={
          <Link href="/">
            <Button full secondary>
              Get Started
            </Button>
          </Link>
        }
      >
        <PricingFeature text="30 Team Members" />
        <PricingFeature text="30 Website" />
        <PricingFeature text="30 GB Storage" />
        <PricingFeature text="30 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
    </div>
  </Section>
);

export { Pricing };
