import { withRouter } from 'next/router'

const NoticiasQueryString=withRouter((props) => {
    return (
        <>
            <h1>Página Query String</h1>
            <p>Ano da Notícia: {props.router.query.ano}</p>
            <p>Categoria da Notícia: {props.router.query.categoria}</p>
        </>
    )
})

export default NoticiasQueryString;