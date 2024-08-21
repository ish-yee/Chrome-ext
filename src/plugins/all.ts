import { NoxPlugin } from "@utils/user-data/types";
import { bookmarkPlugin } from "./bookmark/bookmark-plugin";
import { datetimePlugin } from "./datetime/datetime-plugin";
import { searchPlugin } from "./search/search-plugin";
import { calendarPlugin } from "./calendar/calendar-plugin";
import { notesPlugin } from "./notes/notes-plugin";
import { tasksPlugin } from "./tasks/tasks-plugin";
import { weatherPlugin } from "./weather/weather-plugin";
import { mathPlugin } from "./math/math-plugin";
import { imagePlugin } from "./image-display/image-display";
import { googleslidePlugin } from "./googleslide/google-slide";
import { pomodoroPlugin } from "./pomodoro/pomodoro-plugin";
import { chatgptPlugin } from "./chatgpt/chatgpt";
import { spotifyPlugin } from "./spotify/spotify";
import { netflixPlugin } from "./netflix/netflix";
import { primePlugin } from "./prime/prime";
import { f1tvPlugin } from "./f1tv/f1tv";
import { duolingoPlugin } from "./duolingo/duolingo"
import { crosswordPlugin } from "./crossword/crossword"

export const availablePlugins: NoxPlugin<any, any>[] = [
    bookmarkPlugin,
    datetimePlugin,
    notesPlugin,
    tasksPlugin,
    mathPlugin,
    searchPlugin,
    weatherPlugin,
    calendarPlugin,
    imagePlugin,
    googleslidePlugin,
    pomodoroPlugin,
    chatgptPlugin,
    spotifyPlugin,
    netflixPlugin,
    primePlugin,
    f1tvPlugin,
    duolingoPlugin,
    crosswordPlugin
]

export const availablePluginsWithWidgets = availablePlugins.filter(p => p.widgets.length > 0);