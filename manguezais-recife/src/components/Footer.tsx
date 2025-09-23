import './Footer.css';

/**
 * @function Footer
 * @description Renders a fixed footer with animated crabs walking across the screen.
 * The crabs are implemented using CSS animations for a lively, thematic effect.
 * @returns {JSX.Element} The rendered footer component.
 */
export const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Each div represents a crab with different animation properties to create a varied effect */}
      <div className="crab crab1">🦀</div>
      <div className="crab crab2">🦀</div>
      <div className="crab crab3">🦀</div>
      <div className="crab crab4">🦀</div>
    </footer>
  );
};
