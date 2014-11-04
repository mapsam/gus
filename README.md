GUS
===

Gus is an attempt to connect collaborative Google Spreadsheets with open mapping technologies. The idea is to allow the user to quickly and easily create a new, accessible, and updatable point-based map via simple spreadsheets. It relies on *three* technologies:

1. [Google Spreadsheets](https://docs.google.com/spreadsheet/), *spatial data storage*
1. [Leaflet](http://leafletjs.com/), *mapping library*
1. [Tabletop.js](https://github.com/jsoma/tabletop), *javascript access to spreadsheets*

### Inspiration

> On a *mostly normal* day in September 2014, a friend's brother went missing in Montana. Geographically disconnected and unable to join in the search campaign, I could only watch and hope new updates would open on the Facebook group. Over time many updates dealt with where people had searched or where search parties would be exploring over the day, but soon became disorganized due to Facebook's lack of temporal order and prioritization on likes.

> It seemed hard to track **where** the search was happening, so quickly I put together a spreadsheet for people to add latitude and longitude points with quick descriptions and their name, which populated at an accessible URL.

> Fortunately, our friend **Gus** was found shortly thereafter. This repo, although not directly influential on the outcome, is built on inspiration and community. It is here for others in the same situation, or for those who just want a map of points. Either way, what matters most has been found, and now we use Gus' story to inspire ourselves.

[Make a map!](http://mapsam.com/gus/)

# INSTRUCTIONS

#### Create a spreadsheet

**First thing's first** - you'll have to create a spreadsheet under a google account. [Click here](https://docs.google.com/spreadsheet/) to get one going (you'll have to be signed into your Google account first). This is the hub of your map data, where it all happens.

#### Copy example data

Next, you'll want to copy **[this spreadsheet's data](https://docs.google.com/spreadsheets/d/1SU4q9l75X20wbvIecroglqIJYyMXn5n6Tnx6lRG5E_A/edit#gid=0)** to ensure you properly format your spreadsheet for GUS to work.

#### Publish your spreadsheet

In order for GUS to pull your data, you'll want to publish the spreadsheet to the web. This is configurable via the File menu: **File** > **Publish to the web**. *NOTE: this is not making your spreadsheet publicly editable. If you want others to be able to add points, you should edit your share settings via the "share" button on the right side of the screen when you are editing.*

Press the "publish" button, and you'll see a URL come up with your published data. This is an important URL!

![Published spreadsheet URL](img/published-spreadsheet-url.png)

#### Obtain spreadsheet unique key

The unique identifier for your spreadsheet is accessed via the URL provided when you publish to the web. It is also available in the URL when you are editing your spreadsheet.

```
https://docs.google.com/spreadsheets/d/**1SU4q9l75X20wbvIecroglqIJYyMXn5n6Tnx6lRG5E_A**/pubhtml
```

#### Create GUS URL via unique key

The final step is to essentially pass this spreadsheet key as a parameter into the *GUS* url field. You can do this in two ways:

1. Head to [mapsam.com/gus/find/](http://mapsam.com/gus/find/) with your unique key and enter it in the field.
1. Build your URL manually `http://mapsam.com/gus/find?**your_unique_key**

If there are no problems with your data, you should see a map populate automatically with your data on the left and bounded points in the map. If not, there should be appropriate errors stating the issue.

---

From here you can add points to your spreadsheet and it should update automatically on the map. If it doesn't, it's likely due to your spreadsheet not updating automatically on changes - make sure to check the settings in *Publish to the web*. Share your spreadsheet with whomever you want to be able to edit.

# NOTES

#### Getting latitude and longitude values

When viewing your map, if you **right click** you will see a notification of the latitude and longitude coordinates of that point on the map. Copy these for use in your spreadsheet.

#### Editing column headers

**DO NOT** edit the column headers. These are integral to the map working properly.

# THANKS

To everyone who helped find Gus. What a fantastic conclusion!