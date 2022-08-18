import { useRouter } from 'next/router'

const NoticiasFiltradasPorAnoECategoria = () => {
    const router = useRouter()
    const { ano, categoria } = router.query

    return (
        <>
            <h1>Página do filtro por ano e categoria</h1>
            <p>Ano da Notícia: {ano}</p>
            <p>Categoria da Notícia: {categoria}</p>
        </>
    )
}

export default NoticiasFiltradasPorAnoECategoria;