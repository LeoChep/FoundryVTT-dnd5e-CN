var module_id = '';
var setup_done = false;

export default function registerConverters(id) {
    module_id = id;

    if (setup_done || typeof Babele === 'undefined' ||
        !game.settings.get(module_id, 'enableCompendiumTranslation')) {
        return
    }
    setup_done = true;

    Babele.get().registerConverters({
        'monstername': convertMonsterName,
        'monstertoken': convertMonsterToken,
    });
}




function convertMonsterName(m, translation, data) {
    if (translation == null) {
        return m;
    }

    return translation;
}

function convertMonsterToken(m, translation, data) {
    if (!m) {
        return translation;
    }

    if ('name' in m) {
        m.name = convertMonsterName(m.name, translation, data);
    }

    if (translation == null) {
        return m;
    }

    return translation;
}

