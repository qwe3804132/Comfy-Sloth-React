import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque
            repudiandae aliquam deserunt? Pariatur quis obcaecati ullam ad, modi
            temporibus tempore, explicabo amet magnam molestias rerum, velit
            provident laboriosam distinctio culpa. Aspernatur, amet numquam
            totam voluptatum unde dolorum, consectetur veritatis eius, ratione
            quisquam architecto optio sed ipsa. Eos rem aspernatur quaerat
            voluptate! Fugit, aperiam eos! Inventore assumenda autem fugit
            facere asperiores, sequi vitae in! Fuga sequi voluptate consequatur
            error delectus illo perspiciatis, doloremque voluptatum magnam
            deleniti! Numquam ullam aspernatur autem molestias ipsa laudantium
            eum sit quis, dolores temporibus iusto odit ab sint, assumenda, nam
            consequuntur enim quaerat! Magnam, praesentium libero!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
