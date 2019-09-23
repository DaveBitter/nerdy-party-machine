export default pckg => {
    if (!pckg.exists) { return {}; }

    const { collected, evaluation } = pckg.meta;
    const { name, version, license, links = {}, publisher, description } = collected.metadata;
    const { popularity } = evaluation;

    return {
        name,
        version,
        license,
        publisher: publisher && publisher.username,
        description,
        links,
        downloads: popularity.downloadsCount && new Intl.NumberFormat().format(popularity.downloadsCount.toFixed(0))
    };
};
