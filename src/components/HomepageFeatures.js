import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Learn in Public",
    Svg: require("../../static/img/publicLearning.svg").default,
    description: (
      <>
        I am sharing my thoughts in the public domain in the hopes that it can
        serve others well. If I manage to stumble upon a topic I struggle with
        and help the next person along understand it quicker than I did, I'm
        happy. Knowledge sharing is key to innovation and progression.
      </>
    ),
  },
  {
    title: 'Creating a "Second Brain"',
    Svg: require("../../static/img/book.svg").default,
    description: (
      <>
        "Second Brain" is an idea I learned through Swyx while he has been
        learning in public. I have been following tutorials and learning web
        development for a while, however, I'd often find myself refreshing my
        memory on a lot of topics or see past projects and wonder how on earth I
        achieved that!
      </>
    ),
  },
  {
    title: "Make mistakes",
    Svg: require("../../static/img/mistake.svg").default,
    description: (
      <>
        I am learning, and I will make mistakes. I may misunderstand a concept
        or best practice. If you notice this, please use the "Edit this Page"
        button to help inform me of my mistake! I am open to discussions and
        understanding my mistakes, so please reach out. Or via twitter{" "}
        <a href="https://www.twitter.com/TheAmateurDev">@TheAmateurDev</a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
