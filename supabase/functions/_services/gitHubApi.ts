import { SearchResult, RepositorySearch, Organization, UserSearch } from "../_types/gitHub.ts";

const baseUrl = "https://api.github.com"
const token = Deno.env.get("GITHUB_TOKEN") 

export async function searchVueUsers(): Promise<SearchResult<UserSearch>> {
  const response = await fetch(`${baseUrl}/search/users?q=language:vue+followers:>5&sort=joined&per_page=10`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.json()
}

export async function searchVueRepositories(): Promise<SearchResult<RepositorySearch>> {
  const response = await fetch(`${baseUrl}/search/repositories?q=language:vue&sort=updated&per_page=10`, {
  headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.json()
}

export async function getOrganization(name: string): Promise<Organization> {
  const response = await fetch(`${baseUrl}/orgs/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.json()
}

const data = await searchVueUsers()

console.log(data)