// Transliteration maps for Russian <-> English
const ruToEn = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
  'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

const enToRu = {
  'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'e': 'е',
  'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м',
  'n': 'н', 'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т',
  'u': 'у', 'f': 'ф', 'h': 'х', 'c': 'к'
};

// Common typos and alternative spellings
const commonVariants = {
  'hoodie': ['худи', 'hoodie', 'hoody', 'hudi', 'hudie', 'hoodi', 'hoogie'],
  'pants': ['штаны', 'pants', 'pant', 'штани', 'pents', 'pantz'],
  'sneakers': ['кроссовки', 'sneakers', 'sneaker', 'snickers', 'кросовки', 'кросы', 'sneekers']
};

// Transliterate Russian to English
const transliterateRuToEn = (text) => {
  return text.toLowerCase().split('').map(char => ruToEn[char] || char).join('');
};

// Transliterate English to Russian
const transliterateEnToRu = (text) => {
  return text.toLowerCase().split('').map(char => enToRu[char] || char).join('');
};

// Calculate Levenshtein distance (for fuzzy matching)
const levenshteinDistance = (str1, str2) => {
  const matrix = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
};

// Check if strings are similar (allowing for typos)
const isSimilar = (str1, str2, threshold = 2) => {
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  const maxLength = Math.max(str1.length, str2.length);

  // Allow more errors for longer words
  const adjustedThreshold = maxLength > 6 ? threshold + 1 : threshold;

  return distance <= adjustedThreshold;
};

// Get all possible variants of a search term
const getSearchVariants = (searchTerm) => {
  const variants = new Set();
  const normalized = searchTerm.toLowerCase().trim();

  variants.add(normalized);
  variants.add(transliterateRuToEn(normalized));
  variants.add(transliterateEnToRu(normalized));

  // Add common variants
  Object.entries(commonVariants).forEach(([key, values]) => {
    values.forEach(variant => {
      if (isSimilar(normalized, variant, 2)) {
        variants.add(key);
        values.forEach(v => variants.add(v));
      }
    });
  });

  return Array.from(variants);
};

// Main search function
export const searchProducts = (products, searchQuery) => {
  if (!searchQuery || searchQuery.trim() === '') {
    return products;
  }

  const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);

  return products.filter(product => {
    const productName = product.name.toLowerCase();
    const productDescription = product.description.toLowerCase();

    return searchTerms.every(term => {
      const variants = getSearchVariants(term);

      // Check if any variant matches the product name or description
      return variants.some(variant => {
        // Direct match
        if (productName.includes(variant) || productDescription.includes(variant)) {
          return true;
        }

        // Fuzzy match on individual words
        const productWords = [...productName.split(/\s+/), ...productDescription.split(/\s+/)];
        return productWords.some(word => isSimilar(word, variant, 2));
      });
    });
  });
};
