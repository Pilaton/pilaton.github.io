interface IGithubData {
  name: string;
  description: string;
  html_url: string;
}

interface IGithubVersion {
  tag_name: string;
}

export default class Github {
  #USER = 'Pilaton';
  #BASE_URL = `https://api.github.com/repos/${this.#USER}`;

  async getData(repoName: string): Promise<IGithubData> {
    const response = await fetch(`${this.#BASE_URL}/${repoName}`);
    return (await response.json()) as IGithubData;
  }

  async getLastVersion(repoName: string): Promise<IGithubVersion> {
    const response = await fetch(`${this.#BASE_URL}/${repoName}/releases/latest`);
    return (await response.json()) as IGithubVersion;
  }
}
