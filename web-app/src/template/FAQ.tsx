import Link from 'next/link';

import { QuestionAnswer } from '../faq/QuestionAnswer';
import { Section } from '../layout/Section';

const FAQ = () => (
  <Section
    title="You have Questions?"
    subtitle="FAQ"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at est eleifend?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
        <p>
          Fusce sed nunc ultrices, sollicitudin dui eu, laoreet lacus. Nullam
          mollis nisi ac turpis maximus, posuere viverra lectus tristique.
          Checkout <Link href="/">this example</Link>.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at est eleifend?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
        <p>
          Fusce sed nunc ultrices, sollicitudin dui eu, laoreet lacus. Nullam
          mollis nisi ac turpis maximus, posuere viverra lectus tristique.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus. Read our{' '}
          <Link href="/">blog post</Link>.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
    </div>
  </Section>
);

export { FAQ };
