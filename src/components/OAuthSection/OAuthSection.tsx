import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import GoogleIcon from '../Icons/GoogleIcon/GoogleIcon';
import './OAuthSection.css';

const OAuthSection = () => {
	return (
		<div className="qc-oauth-wrapper">
			<div className="qc-oauth-btn">
				<span className="qc-oauth-btn__icon">
					<GoogleIcon />
				</span>
				<span className="qc-oauth-btn__text">Google</span>
			</div>
			<div className="qc-oauth-btn">
				<span className="qc-oauth-btn__icon">
					<GitHubIcon />
				</span>
				<span className="qc-oauth-btn__text">Github</span>
			</div>
		</div>
	);
};

export default OAuthSection;