export async function GET() {
    try {
        // FIXED: Use just the username, not the full URL
        const username = 'amanq3944';
        
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    // Add GitHub token if available (optional, for higher rate limit)
                    ...(process.env.GITHUB_TOKEN && {
                        'Authorization': `token ${process.env.GITHUB_TOKEN}`
                    }),
                },
                next: { revalidate: 3600 } // Revalidate every hour
            }
        );
        
        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }
        
        const repos = await response.json();
        
        const projects = repos
            .filter(repo => !repo.fork && !repo.private)
            .map(repo => ({
                id: repo.id,
                title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
                description: repo.description || 'No description available',
                githubUrl: repo.html_url,
                demoUrl: repo.homepage || repo.html_url,
                stars: repo.stargazers_count || 0,
                forks: repo.forks_count || 0,
                language: repo.language || 'N/A',
                topics: repo.topics || [],
                updatedAt: repo.updated_at,
            }));
        
        return Response.json(projects);
    } catch (error) {
        console.error('GitHub API Error:', error);
        return Response.json({ error: 'Failed to fetch repositories' }, { status: 500 });
    }
}