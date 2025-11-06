// Blog post metadata
const posts = [
    {
        title: "Building Your Own AI Call Center in 15 Minutes with Asterisk and Python",
        date: "November 6, 2025",
        excerpt: "A practical, step-by-step tutorial showing how easy it is to deploy a production-ready AI voice agent using Docker and Docker Compose. Perfect for developers who want to get started quickly.",
        slug: "ai-call-center-15-minutes"
    },
    {
        title: "The Death of the IVR: Why AI Voice Agents are the Future of Customer Service",
        date: "November 5, 2025",
        excerpt: "Traditional IVR systems are obsolete. Discover why AI voice agents powered by Asterisk provide a superior, open-source alternative for modern customer experience.",
        slug: "death-of-ivr"
    },
    {
        title: "Deep Dive: How Asterisk's ARI and ExternalMedia Power Real-Time AI Conversation",
        date: "November 4, 2025",
        excerpt: "A technical deep-dive into the architecture that makes real-time AI conversation possible. Learn about ARI, ExternalMedia, and the audio streaming pipeline.",
        slug: "ari-externalmedia-deep-dive"
    }
];

// Load posts dynamically
function loadPosts() {
    const postList = document.getElementById('post-list');
    if (!postList) return;
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3><a href="posts/${post.slug}.html">${post.title}</a></h3>
            <div class="post-meta">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="posts/${post.slug}.html" class="read-more">Read More →</a>
        `;
        postList.appendChild(postCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadPosts);
