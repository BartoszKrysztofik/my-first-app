import { useRouter } from "next/router";

export default function ActiveLink({ children, href }) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick}> {children} </a>
    )
}