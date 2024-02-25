import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link"

export default function BlogPost({post}) {
    const router = useRouter()
    const { id } = router.query

    if (!post ) {
        return (
            <p>
                Loading...
            </p>
        )
    }

    return (
        <div className="p-8 ">
            <h1 className="text-3xl text-gray-600 flex justify-center p-4">{post.title}</h1>
            <p className="text-gray-500 text-xl mt-3 mb-3">{post.content}</p>
            <p className="text-xl text-gray-600 mb-3 mt-10">Author: {post.author}</p>
        </div>
    )
}