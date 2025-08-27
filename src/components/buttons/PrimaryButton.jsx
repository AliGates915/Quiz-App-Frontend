import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonsStyles = styled.a`
  display: inline-block;
  background: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  color: var(--white);
  font-size: 1.6rem;
  text-transform: capitalize;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
  }
`;

function PrimaryButton({ children, buttonType, ...rest }) {
  return (
    <ButtonsStyles as={buttonType} {...rest}>
      {children}
    </ButtonsStyles>
  );
}

// ✅ PropTypes validation
PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

export default PrimaryButton;
