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
  const [url, setUrl] = useState(currentConfig?.url ?? "https://f1tv.formula1.com/");

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
          placeholder="https://f1tv.formula1.com/"
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

const F1tvPlugin = ({
  config,
  instanceId,
}: WidgetRenderProps<PicturePluginWidgetConfigType>) => {
  const redirect3 = () => {
    window.open(config.url, "_blank");
  };

  return (
    <div className="PictureWidget">
      <button id="f1tv" onClick={redirect3}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEXhBgD////ulJT97+7iAAD//PzpVFP0sK/97e3++PjjIh/oUU/kLSr3ysn+8/PulpbqaWfpW1nuh4blNjPzqajmQkDse3nxnZzsgH/rcG70t7fqYmD85eT629rlOzn50dDkMC7tjYziEhD73t74zc3jIBznRkTrc3L0u7v3w8L0razyoqHnTErpX13cDvDrAAADq0lEQVR4nO3aW3OiQBCG4VHHKBqiEoMnwGM0x///9xaMbiru7sygQ7tWvc/NXiyVro/pZgBRCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALh5WsuVuviAUtWOf013su5sMh4v61UajfN69z3jMb36yltEXQT7iFqv66Amo7HQ6r5hOWjiK59Sncl0LRLsqL1S9oAzP+Hy5YvDB5FY35JOflbbloP6nvLpnu1U+pfmlTu2sn4CKr1simT6IdUOM+ilRbUaJCKRfprnAaVWsCWS6MQ+oMwMZtdYwH1AoatoLBLo1FwJBdRqKBLolNgMajUVCXRqkwd8FplBnYoEOhUWLWq7u/Ayg6srBhS5yDxf5SJamyqpfdBapRpyAbPrBGyJtehC+jniy5uSutm2Xsqq8aakbtUe3QM2/dkHlGlRh4BBshlF8WC7WK20N8rhiX7gI6C1Rdut/uLw8sdfvH1C6wyKBEx3ep/MR60T1hn0EjAzB2z3D68Us8H47eU1nK/XSeNywVQ7tGjXR0DLDLb2S7eIQs83PBuXjf7OR0BLi06K9duG3t/ahC6PS15a1LzRPyzyQ3QFT1T7m23bDHpZQfMMpqv8kG4F9wJOTxNeZtC8gvNiBMcegx0VAZ//g21iXmwQI4/BjkKXJ3qBbWJTXGOqeGvj1KJeZvDJ+HvStAhYxYtTuRl8NAZsVRZQbJvIjAHfbj+guUWHt9+iVwwoc6tmnsH3SltUZJswr+Doqi3qZQUHxhLL4uX+bc/gnbFEVGVAmato11hiXFlA91u14/uSMwOaWzS2BmxPR9Guf1eaww+gweMhWbxJknl0ZkRzQNsKBu/ZmSfWYQaDr7+t9TzMz0c3TM+KaG5R2wqmiwu+KLNtE8HT4cBw2ImW0UIN52dUMV9kdpaA07PTKftrw98B7xIV11qb2odKyl93+qYSzZkl4OiSTwIdZzA37Kn4QankXUWlT+nMWGNgDXgB6wp+z/drX+2a/V0t/6dsmxoDNj8qDeg6g7mXndrVwmIkdptyVYwtGmwtAXuXBHS8in5Zvqo4UFFbq2ndY8BKV9B9BlWxWTSz/jqfw8+s0Skz+MYWta5gtTP49PP42cO2+CcL4jJVJsYS+yYxvPe9JKC2/XJ3GlCpz3Y6HKaNMj+M6lXd8OX0qGgS/fT+z8+qS53LP2qPR+aPtv92l9Tt9T5LlrH/r9yX+H+rDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANyWX2npR+HrN4G6AAAAAElFTkSuQmCC"
          alt="f1tv"
          width="80%"
        />
      </button>
    </div>
  );
};

const widgetDescriptor = {
  id: "widget",
  get name() {
    return translate("f1tv");
  },
  configurationScreen: PictureConfigScreen,
  mainScreen: F1tvPlugin,
  mock: () => {
    return (
      <F1tvPlugin
        instanceId="mock"
        config={{
          url: "https://www.netflix.com/",
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

export const f1tvPlugin = {
  id: "f1tv",
  get name() {
    return translate("f1tv");
  },
  widgets: [widgetDescriptor],
  configurationScreen: null,
} satisfies NoxPlugin;
