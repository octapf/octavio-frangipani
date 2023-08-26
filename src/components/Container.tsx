import IContainer from '../interfaces/IContainer'

const Container = ({ type, children }: IContainer) => {
	return (
		<div className={type == 'app-container' ? 'app-container' : ''}>
			{children}
		</div>
	)
}

export default Container
