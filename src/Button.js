import PropTypes from 'prop-types'

export function Button({text, name}) {
    return <button onClick={function () {
        console.log('Hola Mundo')
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}