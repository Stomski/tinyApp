// so this is the index script, it imports all my scripting.

import * as selectorFunctions from "./selector.js";
import * as titlePageFunctions from "./titlePage.js";

// selectorFunctions.sectionStateSetter("#calculator");
// selectorFunctions.sectionStateSetter("#title-page");
// selectorFunctions.sectionStateSetter("#art");
selectorFunctions.sectionStateSetter("#notes");

titlePageFunctions.titleSetup();
