import React from 'react'
import { MovieCM,ParentCM } from './styledCM'
export default function Movie({ data }) {
    return (
        <MovieCM>
            {data.map((a) => {
                return (
                    <ParentCM key={Math.random()}>
                        <span>movie name : {a.title}</span>
                        <span>director : {a.director}</span>
                        <span>producer : {a.producer}</span>
                        <span>episodes : {a.episode_id}</span>
                        <span>release date : {a.release_date}</span>
                    </ParentCM>
                )
            })}
        </MovieCM>
    )
}
