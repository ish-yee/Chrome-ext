import { Button } from "@components/Button";
import {
  NoxPlugin,
  WidgetConfigurationScreenProps,
  WidgetRenderProps,
  WidgetDescriptor,
} from "@utils/user-data/types";
import "./styles.scss";
import { translate } from "@translations/index";
import { useTranslation } from "react-i18next";
import { Input } from "@components/Input";
import { useState } from "react";

type PicturePluginWidgetConfigType = {
  url: string;
};

const PictureConfigScreen = ({
  saveConfiguration,
  currentConfig,
}: WidgetConfigurationScreenProps<PicturePluginWidgetConfigType>) => {
  const { t } = useTranslation();
  const [url, setUrl] = useState(currentConfig?.url ?? "https://www.mathsisfun.com/puzzles/");

  const onConfirm = () => {
    saveConfiguration({
      url: url,
    });
  };

  return (
    <div className="PictureWidget-config">
      <div className="field">
        <label>{t("url")}:</label>
        <Input
          placeholder="https://www.mathsisfun.com/puzzles/"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <Button className="save-config" onClick={onConfirm}>
        {t("save")}
      </Button>
    </div>
  );
};

const MathpuzzlePlugin = ({
  config,
  instanceId,
}: WidgetRenderProps<PicturePluginWidgetConfigType>) => {
  const redirect3 = () => {
    window.open(config.url, "_blank");
  };

  return (
    <div className="PictureWidget">
      <button id="mathpuzzle" onClick={redirect3}>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/75/1/desktop-wallpaper-thinking-brain-question-mark-brain-question.jpg"
          alt="mathpuzzle"
          width="80%"
        />
      </button>
    </div>
  );
};

const widgetDescriptor = {
  id: "widget",
  get name() {
    return translate("mathpuzzle");
  },
  configurationScreen: PictureConfigScreen,
  mainScreen: MathpuzzlePlugin,
  mock: () => {
    return (
      <MathpuzzlePlugin
        instanceId="mock"
        config={{
          url: "https://www.mathsisfun.com/puzzles/",
        }}
      />
    );
  },
  appearance: {
    withoutPadding: true,
    size: {
      width: 1,
      height: 1,
    },
    resizable: true,
  },
} as const satisfies WidgetDescriptor<any>;

export const mathpuzzlePlugin = {
  id: "mathpuzzle",
  get name() {
    return translate("mathpuzzle");
  },
  widgets: [widgetDescriptor],
  configurationScreen: null,
} satisfies NoxPlugin;
