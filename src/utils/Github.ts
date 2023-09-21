interface IGithubData {
  name: string;
  description: string;
  html_url: string;
}

interface IGithubVersion {
  tag_name: string;
}

class Github {
  #USER = 'Pilaton';

  async getData(repoName: string): Promise<IGithubData> {
    const response = await fetch(`https://api.github.com/repos/${this.#USER}/${repoName}`);
    const data = (await response.json()) as IGithubData;
    return data;
  }

  async getLastVersion(repoName: string): Promise<IGithubVersion> {
    const response = await fetch(
      `https://api.github.com/repos/${this.#USER}/${repoName}/releases/latest`
    );
    const data = (await response.json()) as IGithubVersion;
    return data;
  }
}

export default Github;
