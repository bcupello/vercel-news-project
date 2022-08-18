import { useRouter } from 'next/router'

const NoticiasFiltradasPorAno = () => {
    const router = useRouter()
    const { ano } = router.query

    return (
        <>
            <h1>Página do filtro por ano</h1>
            <p>Ano da Notícia: {ano}</p>
        </>
    )
}

export default NoticiasFiltradasPorAno;