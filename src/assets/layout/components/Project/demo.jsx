import { Octokit } from "@octokit/rest"  

export default function Demo() {
    async function getRepositoriesFromMine() {

        const octokit = new Octokit({
            auth: process.env.GIT_HUB_ACCESS_TOKEN
        })

        let result = await octokit.request('GET /users/phattantran1997/repos', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
    }
    return (
        <div>



        </div>
    );
}