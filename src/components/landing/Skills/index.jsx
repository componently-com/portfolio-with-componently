import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import { useStaticQuery, graphql } from 'gatsby';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const Skills = () => {
  const {
    allContentfulSkill: { edges },
  } = useStaticQuery(graphql`
    {
      allContentfulSkill {
        edges {
          node {
            name
            description {
              description
            }
          }
        }
      }
    }
  `);
  const skills = edges.map(edge => edge.node);
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details>
          <h1>My skills:</h1>
          <div>
            {skills.map(({ name, description }) => (
              <div>
                <h2>{name}</h2>
                <p>{documentToReactComponents(JSON.parse(description.description))}</p>
              </div>
            ))}
          </div>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
