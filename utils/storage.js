import LocalStorage from 'node-localstorage';

const localStorage = new LocalStorage.LocalStorage('./scratch');

export const saveLink = (link) => {
  const links = getAllLinks();
  links.push(link);
  localStorage.setItem('links', JSON.stringify(links));
};

export const getAllLinks = () => {
  const links = localStorage.getItem('links');
  return links ? JSON.parse(links) : [];
};
