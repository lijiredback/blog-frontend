import react from 'react'

const articleList = [
    {
        id: 0,
        title: '2018前端性能优化清单',
        profile: '这篇文章我在掘金翻译计划中跟着一起翻译的文章（感谢掘金翻译），我翻译了第三部分，然后校对了第二部分，这篇文章对于前端性能优化的技术还是比较新颖和全面的，所以决定自己阅读一遍英文原文，然后又用思维导图整理了下重点，英文原文还是挺长的，所以 如果想要粗略的了解本文内容的可以直接查看我总结的思维导图',
        date: '2019-12-09',
        tag: '性能优化'
    },
    {
        id: 1,
        title: 'Mac 提升开发效率的小工具',
        profile: '好久没有更新文章了，分享一些最近使用的一些提升开发效率的小工具，持续更新哦，如果大家有什么推荐的提升开发效率的小工具欢迎留言哦~',
        date: '2019-12-09',
        tag: '性能优化'
    }
]


const Article = () => {
    return (
        <div className="article-container">
            { articleList.map((id, title, profile, date, tag) => {
                <div key={id} className="article-item">
                    <div className="article-title">{title}</div>
                </div>
            })}
        </div>
    )
}

export default Article